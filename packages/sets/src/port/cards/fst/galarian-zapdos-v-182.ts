import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarianZapdosV_182 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fighting Instinct", powerType: PowerType.ABILITY, text: "This Pokémon's attacks cost Colorless less for each of your opponent's Pokémon V in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunderous Kick", cost: [], damage: "170", text: "Before doing damage, discard a Special Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "FST";
  public name: string = "Galarian Zapdos V";
  public fullName: string = "Galarian Zapdos V FST 182";
  public text: string = "Galarian Zapdos V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
