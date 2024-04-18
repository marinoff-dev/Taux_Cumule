{/* import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Form } from 'react-router-dom'

const ModifTarif = () => {
  return (
    <>
        <div className="flex justify-center items-center h-full py-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 py-4 items-start">
                    <FormField
                        control={form.control}
                        name="nomenclature"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">Nomenclature</FormLabel>
                            <FormControl>
                            <Input placeholder="0207350000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="libelle"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">Libellé</FormLabel>
                            <FormControl>
                            <Input placeholder="-- REPRODUCTEURS DE RACE PURE" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 py-4 items-start">
                    <FormField
                        control={form.control}
                        name="pc"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">PC</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pcs"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">PCS</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ps"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">PS</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rs"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">RS</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 py-4 items-start">
                    <FormField
                        control={form.control}
                        name="rau"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">RAU</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dd_sw"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">DD_SW</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tva"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">TVA</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ect"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">ECT</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 py-4 items-start">
                    <FormField
                        control={form.control}
                        name="da"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">DA</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="caf"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">CAF</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ttv"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">TTV</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tfs"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">TFS</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 px-2 py-4 items-start">
                    <FormField
                        control={form.control}
                        name="tsr"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900">TSR</FormLabel>
                            <FormControl>
                            <Input placeholder="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                
                <Button
                    className="mt-4 w-full"
                    type="submit"
                    disabled={!form.formState?.isValid}
                >
                    {isLoading && <Loader />}
                    Modifier
                </Button>
                </form>
            </Form>
        </div>

    </>
  )
}

export default ModifTarif */}