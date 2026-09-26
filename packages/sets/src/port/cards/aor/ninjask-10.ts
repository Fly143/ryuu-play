import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Ninjask_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wing Buzz", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a card from your hand. If you do, discard the top card of your opponent's deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Afterimage Assault", cost: [], damage: "30", text: "Search your deck for up to 2 Ninjask and put them onto your Bench. Shuffle your deck afterward." }
  ];
  public set: string = "AOR";
  public name: string = "Ninjask";
  public fullName: string = "Ninjask AOR 10";
  public text: string = "Ninjask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "discardFromHand:1");
    }
    return state;
  }
}
